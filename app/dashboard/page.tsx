import NavigationButton from '@/components/custom/navigationButton';
import MainContainer from '@/components/mainContainer';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Plus } from 'lucide-react';

const invoices = [
  {
    srno: '001',
    name: 'Jane',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '17/08/2023',
  },
  {
    srno: '002',
    name: 'John',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '17/08/2023',
  },
  {
    srno: '003',
    name: 'Alex',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '17/08/2023',
  },
  {
    srno: '004',
    name: 'Sarah',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '17/08/2023',
  },
  {
    srno: '005',
    name: 'Tim',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '17/08/2023',
  },
  {
    srno: '006',
    name: 'Spencer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '17/08/2023',
  },
  {
    srno: '007',
    name: 'Tom',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '17/08/2023',
  },
];

export default function Dashboard() {
  return (
    <MainContainer>
      <div className="flex justify-between items-stretch py-8 px-4">
        Dashboard
        <div>
          <NavigationButton
            title="Create new Profile"
            navigateTo="/create-profile"
          ></NavigationButton>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr. No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.srno}>
              <TableCell className="font-medium">{invoice.srno}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.description}</TableCell>
              <TableCell className="text-right">{invoice.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MainContainer>
  );
}
