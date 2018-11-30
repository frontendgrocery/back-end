const test = async (ctx) => {
    ctx.state.data = {
        msg: '这是一个测试接口'
    }
}

module.exports = {
    test
}