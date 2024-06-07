import {defineConfig} from 'cva';
import {extendTailwindMerge} from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  override: {
    conflictingClassGroups: {
      // ↓ ID of class group which creates a conflict with…
      //           ↓ …classes from groups with these IDs
      //   Here we remove the default conflict between the font-size and leading class
      //   groups.
      'font-size': [],
    },
  },
});

export const {cva, cx, compose} = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});

function formatDate(date) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let dayName = daysOfWeek[date.getDay()];
  let monthName = months[date.getMonth()];
  let day = date.getDate();

  return `${dayName}, ${monthName} ${day}`;
}

export function businessDaysFromNow(days) {
  let date = new Date();
  let addedDays = 0;

  while (addedDays < days) {
    date.setDate(date.getDate() + 1);

    // Check if the current day is a weekday (Monday-Friday)
    const dayOfWeek = date.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // 0 = Sunday, 6 = Saturday
      addedDays++;
    }
  }

  return formatDate(date);
}
