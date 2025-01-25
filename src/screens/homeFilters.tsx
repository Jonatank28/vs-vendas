import React from 'react';
import DefaultLayout from '../components/DefautlLayout';
import FormHomeFilters from '../components/screens/homeFilters/FormInitialSettings';

const HomeFiltersPage = () => {
  return (
    <DefaultLayout>
      <FormHomeFilters />
    </DefaultLayout>
  );
};

export default HomeFiltersPage;