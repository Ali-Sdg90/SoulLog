import React, { useEffect, useState } from "react";
import { Calendar, Button, Select, ConfigProvider, Flex, Alert } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/fa";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import { persianWeekDays } from "../constants/persianWeekDays";
import { logs } from "../constants/logs";
import { createTds } from "./../utils/createTds";

dayjs.locale("fa");
dayjs.extend(weekday);
dayjs.extend(localeData);

const CSCalendar = () => {
    const today = dayjs();
    const [value, setValue] = useState(today);
    const [selectedLog, setSelectedLog] = useState(null);
    const [yearMonth, setYearMonth] = useState("");

    const onSelect = (newValue) => {
        setValue(newValue);
        const log = logs[newValue.format("YYYY-MM-DD")];
        setSelectedLog(log || null);
    };

    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    const handleMonthYearChange = (month, year) => {
        setValue(value.month(month).year(year));
    };

    const dateCellRender = (date) => {
        const log = logs[date.format("YYYY-MM-DD")];
        if (!log) return null;
        return (
            <div className="day-log">
                <div>{log.mood}</div>
                <div>🛏 {log.sleep}h</div>
                <div>⭐ {log.dailyScore}</div>
            </div>
        );
    };

    useEffect(() => {
        console.log("Year-Month changed:", yearMonth);
        return () => {
            setTimeout(() => {
                createTds();
            }, 0);
        };
    }, [yearMonth]);

    useEffect(() => {
        const tableHeaderItems = Array.from(
            document.querySelectorAll(".ant-picker-content thead tr th")
        );

        tableHeaderItems.map(
            (item, index) => (item.textContent = persianWeekDays[index])
        );

        document.querySelector(".today-btn").click();
    }, []);
    useEffect(() => {
        const currentMonth = value.month();
        const currentYear = value.year();

        setYearMonth(currentMonth.toString() + currentYear.toString());
    }, [value]);

    return (
        <>
            <Calendar
                value={value}
                onSelect={onSelect}
                onPanelChange={onPanelChange}
                cellRender={dateCellRender}
                headerRender={({ value, onChange }) => {
                    const currentMonth = value.month();
                    const currentYear = value.year();
                    const months = dayjs.months();
                    const years = Array.from(
                        { length: 20 },
                        (_, i) => currentYear - 10 + i
                    );

                    return (
                        <Flex
                            justify="space-between"
                            align="center"
                            className="calendar-header"
                        >
                            <Flex gap={8}>
                                <Button
                                    onClick={() =>
                                        onChange(value.subtract(1, "month"))
                                    }
                                >
                                    ماه قبل
                                </Button>
                                <Button
                                    className="today-btn"
                                    onClick={() => onSelect(today)}
                                >
                                    امروز
                                </Button>
                                <Button
                                    onClick={() =>
                                        onChange(value.add(1, "month"))
                                    }
                                >
                                    ماه بعد
                                </Button>
                            </Flex>
                            <Flex gap={8}>
                                <Select
                                    value={currentYear}
                                    onChange={(newYear) =>
                                        handleMonthYearChange(
                                            currentMonth,
                                            newYear
                                        )
                                    }
                                >
                                    {years.map((year) => (
                                        <Select.Option key={year} value={year}>
                                            {year}
                                        </Select.Option>
                                    ))}
                                </Select>
                                <Select
                                    value={currentMonth}
                                    onChange={(newMonth) =>
                                        handleMonthYearChange(
                                            newMonth,
                                            currentYear
                                        )
                                    }
                                >
                                    {months.map((month, index) => (
                                        <Select.Option
                                            key={index}
                                            value={index}
                                        >
                                            {month}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Flex>
                        </Flex>
                    );
                }}
                locale={{
                    lang: {
                        locale: "fa",
                        today: "امروز",
                        weeks: persianWeekDays,
                    },
                    firstDayOfWeek: 6,
                }}
            />

            <ConfigProvider direction={"rtl"}>
                {selectedLog && (
                    <Alert
                        message={
                            <div className="log-description">
                                <p>حال و هوا: {selectedLog.mood}</p>
                                <p>ساعت خواب: {selectedLog.sleep}</p>
                                <p>انرژی: {selectedLog.energy}</p>
                                <p>استرس: {selectedLog.stress}</p>
                                <p>امتیاز روز: {selectedLog.dailyScore}</p>
                                {selectedLog.notes && (
                                    <p>یادداشت: {selectedLog.notes}</p>
                                )}
                            </div>
                        }
                        type="info"
                        showIcon
                    />
                )}
            </ConfigProvider>
        </>
    );
};

export default CSCalendar;
