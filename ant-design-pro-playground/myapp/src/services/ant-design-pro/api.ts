// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取应用列表 GET /api/applications */
export async function applications (
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
return request<API.RuleList>('/api/applications', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新规则 PUT /api/applications */
export async function updateApplications(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/applications', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/applications */
export async function addApplications(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/applications', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/applications */
export async function removeApplications(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/applications', {
    method: 'DELETE',
    ...(options || {}),
  });
}
