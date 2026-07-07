import { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

interface AlertProps {
  type: "info" | "warning" | "error" | "success";
  children: ReactNode;
}

export default function Alert({ type, children }: AlertProps) {
  const styles = {
    info: {
      bg: "bg-blue-50/70 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-900",
      text: "text-blue-800 dark:text-blue-300",
      icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />,
    },
    warning: {
      bg: "bg-amber-50/70 dark:bg-amber-950/20",
      border: "border-amber-200 dark:border-amber-900",
      text: "text-amber-800 dark:text-amber-300",
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />,
    },
    error: {
      bg: "bg-rose-50/70 dark:bg-rose-950/20",
      border: "border-rose-200 dark:border-rose-900",
      text: "text-rose-800 dark:text-rose-300",
      icon: <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />,
    },
    success: {
      bg: "bg-emerald-50/70 dark:bg-emerald-950/20",
      border: "border-emerald-200 dark:border-emerald-900",
      text: "text-emerald-800 dark:text-emerald-300",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
    },
  };

  const currentStyle = styles[type] || styles.info;

  return (
    <div
      id={`alert-${type}`}
      className={`flex items-start gap-3 p-4 rounded-xl border ${currentStyle.bg} ${currentStyle.border} ${currentStyle.text} text-sm my-6`}
    >
      {currentStyle.icon}
      <div className="flex-1 leading-relaxed">{children}</div>
    </div>
  );
}
