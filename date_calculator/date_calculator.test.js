const {calculateRunningDays, calculateDaysWithOutWeekend, calculateDaysWithOutWeekendAndConsideringHolidays} = require('./date_calculator');

describe('Calculate Running Days', () => {
   it.each([
      [new Date("01-12-2024"), new Date("01-24-2024"),"12 dias"],
      [new Date("01-12-2024"), new Date("01-12-2024"),"0 dias"],
      [new Date("01-11-2024"), new Date("01-12-2024"),"1 dia"]
   ])
   ('Should count running days', (startDate, finalDate, resultDate) => {

    const initialDate = startDate
    const endDate = finalDate

    const result = calculateRunningDays(initialDate, endDate)

    const expectedDate = resultDate;
    expect(result).toBe(expectedDate)

    
   });
}); 

describe('Calculate Running Days Without Weekend', () => {
   it.each([
       [new Date("01-01-2025"), new Date("01-10-2025"), "8 dias"]
   ])('Should count running days without weekends from %s to %s and return %s', (startDate, finalDate, resultDate) => {
       const result = calculateDaysWithOutWeekend(startDate, finalDate);
       expect(result).toBe(resultDate);
   });
});

describe('Calculate Days Without Weekend And Considering Holidays', () => {
   it.each([
       [new Date("2025-04-01"), new Date("2025-04-07"), "4 dias", ["2025-04-03"]],
       [new Date("2025-04-01"), new Date("2025-04-03"), "2 dias", ["2025-04-02"]],
       [new Date("2025-04-01"), new Date("2025-04-07"), "5 dias", []],
       [new Date("2025-04-03"), new Date("2025-04-03"), "0 dias", ["2025-04-03"]],
       [new Date("2025-04-03"), new Date("2025-04-03"), "1 dia", []],
       [new Date("2025-04-01"), new Date("2025-04-05"), "0 dias", ["2025-04-01", "2025-04-02", "2025-04-03", "2025-04-04", "2025-04-05"]],
       [new Date("2025-04-01"), new Date("2025-04-10"), "7 dias", ["2025-04-03", "2025-04-07"]],
   ])(
       'Should count running days without weekends and considering holidays from %s to %s and return %s',
       (startDate, finalDate, expected, holidays) => {
           const result = calculateDaysWithOutWeekendAndConsideringHolidays(startDate, finalDate, holidays);
           expect(result).toBe(expected);
       }
   );
});
