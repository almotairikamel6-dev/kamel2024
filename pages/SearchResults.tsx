import React from 'react';
// FIX: Changed import to use namespace to resolve module resolution issue with react-router-dom.
import * as ReactRouterDOM from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const SearchResults = () => {
  const { t } = useLanguage();
  const [searchParams] = ReactRouterDOM.useSearchParams();
  const query = searchParams.get('q');

  return (
    <Card className="p-6 md:p-10">
      <SectionTitle>{t('searchResults')}</SectionTitle>
      {query ? (
        <div>
          <p className="text-lg text-gray-700">
            {t('resultsFor')} <span className="font-bold text-palm-green">"{query}"</span>
          </p>
          {/* Placeholder for actual search results */}
          <div className="mt-8 text-center text-gray-500">
            <p>Search functionality is under development. No results to display at this time.</p>
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-700">Please enter a search term to see results.</p>
      )}
    </Card>
  );
};

export default SearchResults;
