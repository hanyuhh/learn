import fetch from '@/utils/fetch'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  // return fetch({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
  var response = {}
  response.data = {
    avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    introduction:"我是超级管理员",
    name:"Super Admin",
    role:["admin"],
    token:"admin",
   }
  return response
}

