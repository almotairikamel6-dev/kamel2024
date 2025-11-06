
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const RealEstateRegistration = () => {
  const { t } = useLanguage();

  return (
    <Card className="p-6 md:p-10 max-w-2xl mx-auto">
      <SectionTitle>{t('realEstateRegistration')}</SectionTitle>
      <form className="space-y-6">
        <Input id="officeName" label="اسم المكتب" />
        <Input id="officeAddress" label="عنوان المكتب" />
        <Input id="ownerName" label="اسم صاحب المكتب" />
        <Input id="phone" label="رقم الهاتف" />
        <Input id="mobile" label="رقم الجوال" />

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">موقع المكتب على الخريطة</label>
            <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500">(منطقة عرض الخريطة)</p>
            </div>
        </div>
        
        <Input id="captcha" label={t('visualCaptcha')} />

        <div className="flex items-center">
          <input id="agree" name="agree" type="checkbox" className="h-4 w-4 text-palm-green focus:ring-heritage-gold border-gray-300 rounded" />
          <label htmlFor="agree" className="ms-2 block text-sm text-gray-900">{t('agreeTerms')}</label>
        </div>

        <div className="pt-4 flex items-center gap-4">
            <Button type="submit" variant="primary">{t('submit')}</Button>
            <Button type="reset" variant="ghost">{t('cancel')}</Button>
        </div>
      </form>
    </Card>
  );
};

export default RealEstateRegistration;
