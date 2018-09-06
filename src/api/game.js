import server from '@/util/request';

export function getListData(page, row) {
  return server({
    url: '/game/list',
    method: 'post',
    data: { page, row }
  })
}