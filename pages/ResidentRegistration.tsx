
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const FormSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="py-6 border-b border-gray-200 last:border-b-0">
        <h3 className="text-xl font-bold text-palm-green mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {children}
        </div>
    </div>
);

const ResidentRegistration = () => {
  const { t } = useLanguage();

  return (
    <Card className="p-6 md:p-10">
      <SectionTitle>{t('residentRegistration')}</SectionTitle>
      <form className="space-y-8">
        <FormSection title="المعلومات الشخصية">
            <Input id="fullName" label="الاسم الرباعي" />
            <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">الجنس</label>
                <select id="gender" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-palm-green">
                    <option>ذكر</option>
                    <option>أنثى</option>
                </select>
            </div>
            <Input id="nationalId" label="رقم الهوية" />
            <Input id="idSource" label="مصدر الهوية" />
            <Input id="nationality" label="الجنسية" />
             <div>
                <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-1">الحالة الاجتماعية</label>
                <select id="maritalStatus" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-palm-green">
                    <option>أعزب/عزباء</option>
                    <option>متزوج/متزوجة</option>
                    <option>مطلق/مطلقة</option>
                    <option>أرمل/أرملة</option>
                </select>
            </div>
        </FormSection>

        <FormSection title="معلومات السكن">
             <div>
                <label htmlFor="housingType" className="block text-sm font-medium text-gray-700 mb-1">نوع السكن</label>
                <select id="housingType" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-palm-green">
                    <option>ملك</option>
                    <option>إيجار</option>
                </select>
            </div>
            <Input id="neighborhood" label="اسم الحي" />
            <Input id="street" label="اسم الشارع" />
            <Input id="houseNumber" label="رقم المنزل" />
            <Input id="phone" label="رقم الهاتف" />
            <Input id="mobile" label="رقم الجوال" />
            <Input id="nearbyMosque" label="المسجد المجاور" />
        </FormSection>

        <FormSection title={t('uploadDocs')}>
            <div>
                 <label htmlFor="residenceProof" className="block text-sm font-medium text-gray-700 mb-1">{t('residenceProof')}</label>
                 <input type="file" id="residenceProof" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-palm-green/10 file:text-palm-green hover:file:bg-palm-green/20" />
                 <p className="mt-1 text-xs text-gray-500">{t('allowedFormats')}</p>
            </div>
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">موقع المنزل على الخريطة</label>
                <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center">
                    <p className="text-gray-500">(منطقة عرض الخريطة)</p>
                </div>
            </div>
        </FormSection>
        
        <div className="pt-6 text-center">
            <Button type="submit" variant="primary" className="me-4">{t('submit')}</Button>
            <Button type="reset" variant="ghost">{t('cancel')}</Button>
        </div>
      </form>
    </Card>
  );
};

export default ResidentRegistration;
