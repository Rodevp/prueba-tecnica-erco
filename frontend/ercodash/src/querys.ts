import { gql } from "@apollo/client"

export const GET_ALL_PROJECT_TABLE = gql`
query {
  allProjects {
    name
    currentGeneration
    PanelPower
    totalGeneration
  }
}
`
export const SAVE_PROJECT = gql`
    mutation($systemId: String!, $systemName: String!, $location: String!, $inverterBrand: String!, $panelBrand: String!, $panelPower: String!, $panelQuantity: String!, $installedPower: String!, $currentGeneration: String!, $totalGeneration: String!) {
  saveProject(system_id: $systemId, system_name: $systemName, location: $location, inverter_brand: $inverterBrand, panel_brand: $panelBrand, panel_power: $panelPower, panel_quantity: $panelQuantity, installed_power: $installedPower, current_generation: $currentGeneration, total_generation: $totalGeneration) {
     panel_power
     panel_quantity
     system_name
  }
}
`

export const EDIT_PROJECT = gql`
mutation($systemId: String!, $systemName: String!, $location: String!, $inverterBrand: String!, $panelBrand: String!, $panelPower: String!, $panelQuantity: String!, $installedPower: String!, $currentGeneration: String!, $totalGeneration: String!) {
  editProject(system_id: $systemId, system_name: $systemName, location: $location, inverter_brand: $inverterBrand, panel_brand: $panelBrand, panel_power: $panelPower, panel_quantity: $panelQuantity, installed_power: $installedPower, current_generation: $currentGeneration, total_generation: $totalGeneration) {
    panel_power
     panel_quantity
     system_name
  }
}
`

export const DELETE_PROJECT = gql`
mutation($systemId: String!) {
  deleteProject(system_id: $systemId) {
    delete
  }
}
`