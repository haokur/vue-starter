/// <reference types="Cypress" />

/**
 * describe 一个测试套件
 * it 单个测试用例
 * expect 一个断言
 * 相互关系:
 * 一个 describe 至少有一个 it
 * 一个 it 可以有多个 expect
 */

describe('开始测试第一个套件', () => {
    it('这是一个测试用例', () => {
        expect(1 + 1).equal(2)
        expect(2 + 2).equal(4)
    })
    it('这是同一个测试套件中的另外一个测试用例', () => {

    })
})

// 同一个测试文件中可以有多个测试套件
describe('这是同一个测试文件中的另外一个测试套件', () => {
    it('测试套件', () => {

    })
})

/**
 * cy api 使用说明
 * cy.visit 访问一个域名,域名可以配合 cypress.json 配置的 baseUrl 使用
 * cy.contains 测试 dom 内容
 * cy.get 获取元素
 * .children('[element]') 子元素
 * .should('have.class','[className]') 元素有 class
 * .should('have.attr','[attr]','[value]) 元素有 [attr] 属性且对应的值
 */
describe('cy api 的使用', () => {
    it('测试访问域名', () => {
        cy.visit('/')
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
