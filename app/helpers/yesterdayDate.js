const yesterdayDate = () => {
    const today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    return `${yesterday.getDate()}.${yesterday.getMonth()}.${yesterday.getFullYear()}`;
};

module.exports = yesterdayDate();