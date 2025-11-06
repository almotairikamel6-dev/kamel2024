
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const ContactUs = () => {
    const { t } = useLanguage();
    return (
        <Card className="p-6 md:p-10 max-w-2xl mx-auto">
            <SectionTitle>{t('contactUs')}</SectionTitle>
            <p className="mb-6 text-gray-600">
                نسعد بتواصلكم معنا. يرجى ملء النموذج أدناه لإرسال رسالتكم.
            </p>
            <form className="space-y-6">
                <Input id="contactName" label="الاسم الثلاثي" />
                <Input id="contactEmail" label="البريد الإلكتروني" type="email" />
                <Input id="contactSubject" label="الموضوع" />
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                    <textarea 
                        id="message" 
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-palm-green focus:border-palm-green"
                    ></textarea>
                </div>
                 <div>
                    <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">رفع ملف (اختياري)</label>
                    <input type="file" id="attachment" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-palm-green/10 file:text-palm-green hover:file:bg-palm-green/20" />
                    <p className="mt-1 text-xs text-gray-500">الصيغة المسموحة: PDF (بحد أقصى 2MB)</p>
                </div>
                <Input id="captcha" label={t('visualCaptcha')} />
                <div className="pt-4 flex items-center gap-4">
                    <Button type="submit" variant="primary">{t('submit')}</Button>
                    <Button type="reset" variant="ghost">{t('cancel')}</Button>
                </div>
            </form>
        </Card>
    );
};

export default ContactUs;
