
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const AboutPlatform = () => {
  const { t } = useLanguage();

  return (
    <>
      <SectionTitle>{t('aboutPlatform')}</SectionTitle>
      <Card className="p-6 md:p-10">
        <div>
          <h2 className="text-2xl font-bold text-palm-green mb-4">{t('aboutPlatformTitle')}</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {t('aboutPlatformContent')}
          </p>
        </div>
      </Card>
    </>
  );
};

export default AboutPlatform;