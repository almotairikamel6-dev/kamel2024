
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row py-3 border-b border-gray-200">
    <dt className="sm:w-1/3 text-gray-600 font-semibold">{label}</dt>
    <dd className="sm:w-2/3 text-gray-800 mt-1 sm:mt-0">{value || 'غير متوفر حالياً'}</dd>
  </div>
);

const CVSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="mt-8">
    <h3 className="text-xl font-bold text-palm-green mb-3">{title}</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const OmdaCV = () => {
  const { t } = useLanguage();
  
  const qualifications = ['بكالوريوس في العلوم الإدارية', 'دبلوم عالي في إدارة الأزمات'];
  const experiences = ['ضابط شرطة سابق (20 عامًا)', 'رئيس قسم التحقيقات الجنائية'];
  const trainings = ['دورة القيادة الفعالة', 'دورة التواصل مع الجمهور', 'دورة الأمن السيبراني للمؤسسات الحكومية'];

  return (
    <Card className="p-6 md:p-10">
      <SectionTitle>{t('omdaCV')}</SectionTitle>
      
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img src="/omda-avatar.png" alt="Omda Portrait" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-heritage-gold" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-palm-green">عبدالله بن محمد الصالح</h2>
          <p className="text-lg text-gray-500 mt-1">عمدة حي الإسكان والروضة - بريدة</p>
        </div>
      </div>
      
      <dl>
        <InfoRow label={t('fullName')} value="عبدالله بن محمد الصالح" />
        <InfoRow label={t('nationality')} value="سعودي" />
        <InfoRow label={t('dob')} value="15/05/1975" />
        <InfoRow label={t('mobile')} value="********05" />
        <InfoRow label={t('email')} value="omda.****@moi.gov.sa" />
      </dl>

      <CVSection title={t('qualifications')} items={qualifications} />
      <CVSection title={t('experience')} items={experiences} />
      <CVSection title={t('training')} items={trainings} />
    </Card>
  );
};

export default OmdaCV;
