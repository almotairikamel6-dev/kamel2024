
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const FormItem: React.FC<{ title: string }> = ({ title }) => {
    const { t } = useLanguage();
    return (
        <Card className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-palm-green me-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <div className="flex gap-2">
                <Button variant="ghost">{t('downloadPDF')}</Button>
                <Button variant="ghost">{t('downloadWord')}</Button>
            </div>
        </Card>
    );
};

const OfficialForms = () => {
  const { t } = useLanguage();

  return (
    <>
      <SectionTitle>{t('officialForms')}</SectionTitle>
      <div className="space-y-6">
        <FormItem title="نموذج تعريف" />
        <FormItem title="نموذج مشهد تزكية" />
        <FormItem title="نموذج كفالة حضورية غرامية" />
      </div>
    </>
  );
};

export default OfficialForms;
