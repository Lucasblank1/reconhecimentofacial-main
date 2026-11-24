import { describe, expect, it } from "vitest";
import type { FaceResult } from "@/components/CameraCapture";
import {
  accumulateFaceStatistics,
  type SessionStatistics,
} from "@/lib/sessionStatistics";

const emptyStatistics: SessionStatistics = {
  detected: 0,
  recognized: 0,
  unknown: 0,
};

function face(person: FaceResult["person"]): FaceResult {
  return {
    person,
    distance: person ? 0.2 : null,
    box: { x: 0, y: 0, width: 10, height: 10 },
  };
}

describe("accumulateFaceStatistics", () => {
  it("counts known and unknown faces from a completed analysis", () => {
    const updated = accumulateFaceStatistics(emptyStatistics, [
      face({ id: "1", name: "Pessoa", imageSrc: "", registeredAt: "" }),
      face(null),
      face(null),
    ]);

    expect(updated).toEqual({ detected: 3, recognized: 1, unknown: 2 });
    expect(updated.recognized + updated.unknown).toBe(updated.detected);
  });

  it("leaves the session totals unchanged when no faces were detected", () => {
    const current = { detected: 4, recognized: 2, unknown: 2 };

    expect(accumulateFaceStatistics(current, [])).toBe(current);
  });

  it("accumulates consecutive analyses", () => {
    const first = accumulateFaceStatistics(emptyStatistics, [face(null)]);
    const second = accumulateFaceStatistics(first, [face(null), face(null)]);

    expect(second).toEqual({ detected: 3, recognized: 0, unknown: 3 });
  });
});
