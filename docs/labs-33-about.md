#Labs 33
Welcome, new Labs team. We hope to have created a fantastic foundation for this project. Family Promise is a great organization who is ready to use technology to be even better and more data-centric.

Our tasks was to set a strong foundation for key features.

##Tech Stack
Front-End: React.js, React-Redux, Ant Design, SCSS
Back-End: Node.js, Express.js
Database: PostgreSQL
Hosting: AWS Amplify, Heroku, Cloudinary
Authorization: Okta

We used functional components for React.js with props destructured.

```
function AddProgramForm({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
```

###Ant Design Components
Ant Design (AntD) was the UI framework of choice. We used AntD whenever possible. The two most notable uses were in the NavBar on tablet and the modals.

The Navbar on tablet was a combination of the AntD Drawer component, Sider component the Menu component.

```
 <Drawer
        className="tablet"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="200"
      >
        <Sider>
          {userRole === 'Administrator' ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
```

Depending on the role pulled from localStorage, it displays the proper nav bar.

We're using the Table component for the tables. We initially wanted to make a dynamic Table component, but ran out of time. We ended up just creating each table in it's individual component. Making it dynamic may be possible by passing the columns and the dataSource through props.

The Table component itself is straightforward and fairly simple. It takes two key properties: columns and dataSource.

```
<Form form={form}>
          <Table
            className="desktop-table"
            // rowSelection={CheckboxComponent(tableData)}
            columns={columns}
            dataSource={tableData}
            bordered
          />
        </Form>
```

It is important to note that in order to use In-Line editing, it must be surrounded by Form.

The columns property is an array of objects, with each object being each particular column within the table. Below is the array with just one object showing.

```
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="firstName"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input First Name!`,
              },
            ]}
          >
            <Input defaultValue={record.firstName} />
          </Form.Item>
        ) : (
          <>{record.firstName}</>
        );
      },
    },
```

Title is the title of the column, dataIndex is the data key from your data table that will be displayed in this column, key is the unique key of the column, editable determines if that column is editable and then finally the render. The render is a bit more complex. Render is what is being rendered in the columns. It passes record, which is information from your data. We then created a variable called editable calls the isEditing function and passes in the record so that it is being edited.

From there, we run a conditional to either display a form input or the data.

###Redux
To handle state, we have two key folders: reducers and actions. Within each folder, a file for each specific action and reducer.

<img src="https://res.cloudinary.com/water-my-plants/image/upload/v1619821624/state-folder.png"/>

There is then an index folder within each where all files are exported to. Finally, the reducers are combined within the index.js folder within the state folder.

###Handling Re-Rendering with Redux
To handle the table components re-rendering, we added a key in the state objects called "change"

```
export const initialProgramState = {
  programs: [],
  program: null,
  status: 'Resolved',
  change: '',
  error: '',
};
```

This was initialized as an empty string, but would be changed on successful adds, edits and deletes.

```
    case ADD_PROGRAM_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'added',
      };
```

Then, within the Table components, I bring in 'change' via the mapStateToProps.

```
const mapStateToProps = state => {
  return {
    employees: state.employee.employees,
    programs: state.program.programs,
    change: state.employee.change,
  };
};
```

This is then brought into the useEffect as the second argument so that it re-renders only when the state of change happens.

```
 useEffect(() => {
    getAllEmployeeAction();
    getAllProgramsAction();
  }, [change]);
```

##Styling
Styling was mostly handled by Ant Design, but in instances where we did need to make changes, we used scss. You will see a `app.scss` file that imports all the other scss files up on top. Those are in the styles folder. If you need to add another scss file, be sure to import it into the main `app.scss` file. Once you do that, it is automatically connected. You do not have to important on the React files.

##Read-Me-Template
You will find a file in the Docs folder called 'pull-request-template.md'. This file automatically populates the Pull Request with this information. It standardizes all Pull-Requests so there is structure. Feel free to change that file.

##Feature Notes
The back-end and Redux store is complete for the services and service-types. However, the front-end did not have a chance to be completed for those two.
Within the services folder within pages, you will see the buttons that contain the modal. You only need to bring in the table and connect the information.
