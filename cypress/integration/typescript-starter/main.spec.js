/// <reference types="Cypress" />

describe('cy api 的使用', () => {
    it('测试访问域名', () => {
        cy.visit('/typescript-starter.html')
    })

    it('测试 contains 页面内容', () => {

        // 直接检测页面中是否包含内容
        cy.contains('double eleven')

        // 判断获取的特定元素是否包含内容
        cy.contains('.double-wrap', 'double eleven')

        // 判断获取的特定元素是否包含内容,并且带参数
        cy.contains('.double-wrap', 'double eleven', {
            log: false, // 不显示打印信息?
            timeout: 1000, // 设置retry时间
        })
    })
})

/**
 * 交互操作
 */
describe('测试与DOM交互操作', () => {
    it('测试非输入操作', () => {
        // 点击事件
        // 找到元素并进行操作
        cy.get('main').contains('submit for form').click()

        // 元素数组索引定位
        cy.get('.fruits-list li').eq(0).click()
    })

    it('测试输入操作', () => {
        cy.contains('年龄').find('input').type(28)
    })
})
