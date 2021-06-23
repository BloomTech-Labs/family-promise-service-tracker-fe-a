1. The backend team created an all new table schema, names have been changed throughout the site. If something is breaking, double check the naming schema. Changes are recorded in this doc: https://docs.google.com/document/d/1kAsDqFNVSUVvSCgczPOsPthMqTzC0lCNS9RZr0xsOOs/edit?usp=sharing 

Program Manager/ Admin User Types
2. Categories Components - 
    - needs an endpoint and to be connected (action and reducer are built out)
 
3. Recipients - AddRecipient Form Component
          - The Address dropdown is broken. This is because the table schema has changed to accept Address, Zip, State, etc. fields instead of being a dropdown.
          - OR if you think it makes more sense, connect it to a household instead. This would mean a user would have to create a household before creating a                  recipient. 
4. Sort features on each table aren't working. This could be because of the name mismatch from the new tables. 

5. Service Table - Edit feature. If you click edit and change something it changes every input field. 


Service Provider User Type

1. Need to work on adjusting this form to display the custom service types that a program manager creates. 


