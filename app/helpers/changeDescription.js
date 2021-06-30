const changeDescription = (desc) => {
    return desc.split(' ').join('_').toLowerCase();
};

module.exports = changeDescription;