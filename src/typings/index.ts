import { RouteConfigComponentProps } from 'react-router-config'

interface RouterInfo {
  id: string
}

export interface PageProps extends RouteConfigComponentProps<RouterInfo> {}
