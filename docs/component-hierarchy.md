# Component Hierarchy


### Main
  - Navbar
    - AuthButtonContainer
  - Main
  - Footer

### Auth
  - AuthFormContainer
    - AuthFormS

### Cities
  - CitiesIndexContainer
    - CitiesIndex
      - CitiesIndexItem

### City Show
  - CityShow
    - CityDetail
    - EventsIndexContainer
      - EventsIndex
        - EventsIndexItem

### Dashboard
  - DashboardContainer
    - EventsIndexContainer
      - EventsIndex
        - EventsIndexItem
    - EventsIndexContainer
      - EventsIndex
        - EventsIndexItem

### Hosting
  - HostingShow
    - EventFormContainer
      - EventForm


# Routes

| path                          | component           |
| ----------------------------- | ------------------- |
| "/main"                       | MainContainer       |
| "/sign-in"                    | AuthFormContainer   |
| "/sign-up"                    | AuthFormContainer   |
| "/cities"                     | CitiesIndex         |
| "/cities/:id"                 | CityShow            |
| "/dashboard"                  | Dashboard           |
| "/hosting"                    | HostingContaine     |
