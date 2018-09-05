import server from '@/util/request';

export function uploadFabu(data) {
  return server({
    url: '/admin/gamefabu',
    method: 'post',
    data: data
  })
}