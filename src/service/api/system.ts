import { request } from '../request';

/** get role list */
export function fetchGetRoleList(params?: Api.SystemManage.RoleSearchParams) {
  return request<Api.SystemManage.RoleList>({
    url: '/system/role/list',
    method: 'get',
    params
  });
}

/**
 * get all roles
 *
 * these roles are all enabled
 */
export function fetchGetAllRoles() {
  return request<Api.SystemManage.AllRole[]>({
    url: '/system/role/all',
    method: 'get'
  });
}

/** get user list */
export function fetchGetUserList(params?: Api.SystemManage.UserSearchParams) {
  return request<Api.SystemManage.UserList>({
    url: '/system/user/list',
    method: 'get',
    params
  });
}

export function fetchSaveUser(data: Api.SystemManage.CreateUserParams) {
  return request<App.Service.Response<any>>({
    url: '/system/user/add',
    method: 'post',
    data
  });
}

export function fetchUpdateUser(userId: string, data: Api.SystemManage.CreateUserParams) {
  return request<App.Service.Response<any>>({
    url: `/system/user/${userId}`,
    method: 'put',
    data
  });
}

export function fetchDeleteUser(userId: string) {
  return request({
    url: `/system/user/${userId}`,
    method: 'delete'
  });
}

export function fetchBatchDeleteUser(data: string[]) {
  return request({
    url: `/system/user/batch-delete`,
    method: 'post',
    data
  });
}

/** get menu list */
export function fetchGetMenuList() {
  return request<Api.SystemManage.MenuList>({
    url: '/system/menu/list',
    method: 'get'
  });
}

/** get all pages */
export function fetchGetAllPages() {
  return request<string[]>({
    url: '/system/getAllPages',
    method: 'get'
  });
}

/** get menu tree */
export function fetchGetMenuTree() {
  return request<Api.SystemManage.MenuTree[]>({
    url: '/system/getMenuTree',
    method: 'get'
  });
}
