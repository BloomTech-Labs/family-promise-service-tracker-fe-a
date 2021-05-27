1. Role doesn't always get switched when logged out and logging in with another user
2. Program Table - POST and DELETE do not work because backend has disabled these endpoints
3. Recipient Table Filter bug: Gender dropdown needs regex, currently "male" returns "female" because those chars appear in both strings
4. Recipient Table Filter Bug: Veteran Status filter does not work properly
5. Service Entries Dropdown/Filters: Filter for Date & Time does not work. Look into Ant Design and DatePicker
6. Service Table Bug: editing any field for a row deletes the Date & Time value
7. Service Table Bug: When in editing, Service Type field displays id instead of name
8. Service Table Bug - need to refresh after POSTing a new service log or service type to see changes
