export type IHistory = {
  id: string
  image_link: string
  title: string
  create_data: string
}
export type IHeaderImages = {
  id: string
  haeder_image_link: string
  create_data: string
}
export type IStatistic = { title: string; statistic: string }
export type IApplication = {
  id: string
  type_of_service: string
  organization_name: string
  name: string
  number: string
  comment: string
  create_data: string
}
export type IService = {
  title: string
  image_link: string
}
export type ITeamImages = {
  our_team_image_link: string
}
export type IPartners = {
  id: string
  image_link: string
  camment: string
  create_data: string
}

export type IData = {
  histories: IHistory[]
  headerImages: IHeaderImages[]
  statistic: IStatistic[]
  Application: IApplication[]
  Servise: IService[]
  TeamImages: ITeamImages[]
  partners: IPartners[]
}

export type IGlobalDataType = {
  data: IData | any
}

export const BASIC_LINK = 'https://storage.googleapis.com/telecom-storege_pic/'
