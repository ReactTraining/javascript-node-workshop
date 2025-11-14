# Azure Open Telemetry

https://portal.azure.com/#@credigy365.onmicrosoft.com/resource/subscriptions/ea0654fb-d866-4e26-b142-d6c3d35530c9/resourceGroups/rg-credigyplatform-dev-eus/providers/microsoft.insights/components/appi-credigyplatform-ui-main-dev-eus/overview

https://portal.azure.com/#@credigy365.onmicrosoft.com/resource/subscriptions/ea0654fb-d866-4e26-b142-d6c3d35530c9/resourceGroups/rg-credigyplatform-dev-eus/providers/microsoft.insights/components/appi-credigyplatform-ui-cv-dev-eus/overview

# General: High

- Fix Dialog Sticky Footer
- When Dale fixes status/statusName issue with db, go back and remove those db-maps
- Rogerio wants to explore a new idea for responsive tables
- I don't like how our GET based RBAC stuff is "url sensitive"
- The token, the one that starts with eyJ0e... is bleeding into the UI via serialized JSON data from loaders - took a screenshot
- Double check forms with errors
- Fix the zod types for forms controlled values
- I don't like how our two dialogs have two different strategies for rbac, one is internal
  and the other is external

# Potential Refactors

- The PageTable(s), might be nice to refactor all that useEffect filtering and search code

# Fazal and Rogerio Code Review

- Why are all the columns in query builder aligned weird

- Update Fazal's table to use the new <PageActionMenu> and <ActionMenu> abstraction
  And new PageBody.Content stuff

# General: Low

- zod `results.error.flatten()` is deprecated
- Lets get rid of all import.meta.env.... stuff
- Avatar
- Tables: Expanded rows are "index based" because there's bug where if we then search or filter
  the new results that show up will have that same index open (even though it's a different record). Filtering or searching needs to collapse all expanded
- Main menu side bar items that don't have a sub-menu (like Home) still open a sub menu in mobile

# Notifications

- https://www.magicbell.com/blog/notification-customization-with-magicbell
- Story: https://credigy.atlassian.net/browse/APPDEV-2074

# Logging

- We need a way for the client to log issues
- Table DB to Schema mapping mismatch should log an error

# A11y

- Button focus management
