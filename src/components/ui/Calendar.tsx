import { cn } from "../../lib/utils";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { buttonVariants } from "./button";


export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <section className=" md:col-start-2 md:row-span-3 md:row-start-1">
      <DayPicker
        fixedWeeks
        showOutsideDays={showOutsideDays}
        className={cn(
          "mx-auto flex w-full max-w-[400px] justify-center border-[1px] border-gray-200 dark:border-midnightBlue dark:bg-midnightBlue dark:text-white sm:w-[300px] lg:w-[340px]",
          className
        )}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption:
            "w-full flex justify-center py-2 relative items-center dark:text-white",
          caption_label: "text-xl font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "destructive" }),
            "bg-slate-950 dark:bg-deepSlate hover:bg-slate-800/90 text-white"
          ),
          nav_button_previous: "absolute left-2",
          nav_button_next: "absolute right-2",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-10 lg:w-12 font-normal text-[1rem]",
          row: "flex w-full mt-2",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-10 w-10 lg:h-10 lg:w-12 p-0 font-lg hover:bg-slate-950 hover:text-white dark:text-white"
          ),
          day_today: "bg-slate-950",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => (
            <AiOutlineLeft className="text-white-950 h-6 w-6" />
          ),
          IconRight: ({ ...props }) => (
            <AiOutlineRight className="text-white-950 h-6 w-6" />
          ),
        }}
        {...props}
      />
    </section>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
