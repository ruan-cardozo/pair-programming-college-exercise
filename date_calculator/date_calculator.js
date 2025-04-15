const ONE_DAY = 1000 * 60 * 60 * 24;

function calculateRunningDays(initialDate, endDate) {
    const diff = Math.round(Math.abs((initialDate - endDate) / ONE_DAY))

    if (diff === 1) {
        return `${diff} dia`
    }

    return `${diff} dias`
}

function calculateDaysWithOutWeekend(initialDate, endDate) {
    let counter = 0;

    for (let date = new Date(initialDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const dayOfWeek = date.getDay();

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            continue;
        }

        counter++;
    }

    return `${counter} dias`;
}

function calculateDaysWithOutWeekendAndConsideringHolidays(initialDate, endDate, holidays = []) {
    let counter = 0;

    for (let date = new Date(initialDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const dayOfWeek = date.getDay();
        const formattedDate = date.toISOString().split('T')[0];

        if (dayOfWeek === 0 || dayOfWeek === 6 || holidays.includes(formattedDate)) {
            continue;
        }

        counter++;
    }

    return counter === 1 ? `${counter} dia` : `${counter} dias`;
}

module.exports = { calculateRunningDays, calculateDaysWithOutWeekend, calculateDaysWithOutWeekendAndConsideringHolidays };