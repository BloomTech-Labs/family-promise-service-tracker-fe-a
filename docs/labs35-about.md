Hey Labs 36! This doc was created to help update you on where we left this project off.

Labs 33 did an awesome job documenting how to use antDesign so definitely check out those docs if you need any help there.

Labs35 took on making the forms that exist on the Program Manager/Admin side more composable. Backend restructured our entire table schema from 9 tables to 18.
For frontend, this meant a lot of time was spent renaming all of the fields in our code to match the new schema. We were able to rename a lot, but not all of the backend endpoints were built out in time for us to connect to. You'll see in our known defects folder, but I will mention it here again, if there are unknown features that aren't working, double check that the names are matching up with what the backend expects first.

One thing we wanted to implement with the new table schema was making it so the AddServiceTypeForm could have a custom add field feature. If you go to this component you will see some notes on what the add a new service field dropdown does. We mapped out only the Number input, so a good place to start would be to finish mapping out the rest of components that would be added if a Program Manager selects each dropdown field. Once the Program Manager adds a Service Type, this should create a custom form for a Service Entry on the Service Provider side that populates once the user selects that usertype in the form. Check out our whimsical for a visual guide for this. https://whimsical.com/family-promise-HUXnK1PemLjSs5emWvE2Tm

We're really close on finishing the map display, we were still just waiting for DS and BE to connect so that we could display the map using plotly. You should be able to get this up and running quickly as plotly seems very user-friendly to implement. 
We were also really close to finishing the Categories tab to display the table and the add categories form. We built out a reducer and action for this, but we didn't have an endpoint finished so we couldn't pull in any data.

We hope we left you off with enough information to get started and not too many problems to correct. Again, pay close attention to the new table schema if any problems arise. Once those endpoints are built, everything should connect nicely!

Good luck! And enjoy Labs! You're so close to the end! :) Congrats!!
