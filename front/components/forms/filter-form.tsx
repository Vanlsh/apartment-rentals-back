import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  filterFiled,
  filterSchema,
  FilterSchema,
  getFilterValues,
} from './utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '../ui/select';
import LoadingButton from '../common/loading-button';

interface IFilterFormProps {
  onSubmit: (values: Partial<FilterSchema>) => void;
  defaultValues: Partial<FilterSchema>;
}

const FilterForm = ({ onSubmit, defaultValues }: IFilterFormProps) => {
  const form = useForm<FilterSchema>({
    resolver: zodResolver(filterSchema),
    defaultValues: getFilterValues(defaultValues),
  });

  //   const [isLoading, startTransition] = useTransition();
  const handleSubmit = (values: FilterSchema) => {
    onSubmit(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
        {filterFiled.map(filter => (
          <FormField
            key={filter.name}
            name={filter.name}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{filter.label}</FormLabel>
                {filter.type === 'input' && (
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                )}
                {filter.type === 'select' && (
                  <FormControl>
                    <Select
                      onValueChange={value => {
                        if (value === 'all') {
                          return field.onChange(null);
                        }
                        field.onChange(Number(value));
                      }}
                      defaultValue={field.value ? String(field.value) : 'all'}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select amount of rooms" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        {filter.options.map(option => (
                          <SelectItem key={option} value={String(option)}>
                            {option === 1 ? '1 room' : `${option} rooms`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                )}

                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <LoadingButton
          isLoading={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
        >
          Apply filters
        </LoadingButton>
      </form>
    </Form>
  );
};

export default FilterForm;
