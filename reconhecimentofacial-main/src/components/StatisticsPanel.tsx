import { ScanFace, UserRoundCheck, UserRoundX } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { SessionStatistics } from "@/lib/sessionStatistics";

interface StatisticsPanelProps {
  statistics: SessionStatistics;
}

const statisticCards = [
  {
    key: "detected",
    label: "Rostos detectados",
    icon: ScanFace,
    color: "text-primary",
    border: "border-primary/30",
  },
  {
    key: "recognized",
    label: "Pessoas reconhecidas",
    icon: UserRoundCheck,
    color: "text-success",
    border: "border-success/30",
  },
  {
    key: "unknown",
    label: "Pessoas desconhecidas",
    icon: UserRoundX,
    color: "text-destructive",
    border: "border-destructive/30",
  },
] as const;

export default function StatisticsPanel({ statistics }: StatisticsPanelProps) {
  return (
    <section aria-labelledby="session-statistics-title" className="space-y-2">
      <h2
        id="session-statistics-title"
        className="text-xs font-heading uppercase tracking-widest text-muted-foreground"
      >
        Estatísticas da sessão
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {statisticCards.map(({ key, label, icon: Icon, color, border }) => (
          <Card
            key={key}
            className={`flex min-w-0 items-center gap-3 p-3 ${border} bg-card/80`}
          >
            <Icon aria-hidden="true" className={`h-6 w-6 shrink-0 ${color}`} />
            <div className="min-w-0">
              <p className="text-xs leading-tight text-muted-foreground">{label}</p>
              <p className={`font-heading text-2xl leading-tight ${color}`}>
                {statistics[key]}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
