import type { FaceResult } from "@/components/CameraCapture";

export interface SessionStatistics {
  detected: number;
  recognized: number;
  unknown: number;
}

export function accumulateFaceStatistics(
  current: SessionStatistics,
  results: FaceResult[]
): SessionStatistics {
  if (results.length === 0) return current;

  const recognized = results.filter((result) => result.person !== null).length;
  const unknown = results.length - recognized;

  return {
    detected: current.detected + results.length,
    recognized: current.recognized + recognized,
    unknown: current.unknown + unknown,
  };
}
