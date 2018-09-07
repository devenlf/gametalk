import server from '@/util/request';

export function getListData(page, row) {
  return server({
    url: '/game/list',
    method: 'post',
    data: { page, row }
  })
}

//发布帖子
export function fabuTiezi(data) {
  return server({
    url: '/game/fabutiezi',
    method: 'post',
    data: data
  })
} 