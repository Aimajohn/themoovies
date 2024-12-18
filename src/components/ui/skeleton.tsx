import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-100/40 dark:bg-slate-300/20",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
