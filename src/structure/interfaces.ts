export interface StatusResponse {
    page: PageResponse
    incidents: IncidentsResponse
}

export interface PageResponse {
    id: string
    name: string
    url: string
    updated_at: string
}

export interface IncidentsResponse {
    created_at: string
    impact: string
    incident_updates: IncidentUpdate[]
    name: string
    status: string
}

export interface IncidentUpdate {
    body: string
    status: string
}