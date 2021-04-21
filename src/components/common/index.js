import FormButton from './FormButton';
import FormInput from './FormInput';
import List from './List';
import LoadingComponent from './LoadingComponent';
import Button from './Button';
import TableComponent from './Table/Table';
import TagsComponent from './Table/Tags';
import CheckboxComponent from './Table/Checkbox';
import DropdownComponent from './Table/Dropdown';
import NavbarHeader from './Navbar/NavbarHeader';
// notice we're building out a 'package' of reusables here and exporting them as an object of component properties.
// to use this, simply `import {foo, bar, baz} from '<path-to-this-directory>/ReusableComponents';`
export {
  FormButton,
  FormInput,
  List,
  LoadingComponent,
  Button,
  TableComponent,
  TagsComponent,
  CheckboxComponent,
  DropdownComponent,
  NavbarHeader as TabletHeader,
};
