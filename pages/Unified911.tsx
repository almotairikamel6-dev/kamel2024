import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

// Fix: Replaced JSX.Element with React.ReactNode to resolve namespace error.
const InfoBlock: React.FC<{ title: string; content: string; icon: React.ReactNode }> = ({ title, content, icon }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-palm-green/10 text-palm-green flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-palm-green">{title}</h3>
            <p className="text-gray-600 mt-1">{content}</p>
        </div>
    </div>
);

const Unified911 = () => {
    const { t } = useLanguage();
    return (
        <Card className="p-6 md:p-10">
            <SectionTitle>{t('unified911')}</SectionTitle>
            <div className="space-y-6">
                <InfoBlock 
                    title="تعريف المركز" 
                    content="مركز العمليات الأمنية الموحدة (911) هو مشروع يهدف إلى توحيد أرقام الطوارئ في رقم واحد لتقديم الخدمات الأمنية والإنسانية بكفاءة عالية."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                />
                 <InfoBlock 
                    title="الجهات المشغلة" 
                    content="تتكامل في المركز جهات متعددة مثل الشرطة، الدفاع المدني، الهلال الأحمر، وأمن الطرق للاستجابة السريعة والمنسقة للبلاغات."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>}
                />
                 <InfoBlock 
                    title="أنظمة التشغيل" 
                    content="يعتمد المركز على أنظمة تقنية متقدمة لاستقبال البلاغات، تحديد المواقع، ترحيلها للجهة المختصة، وإدارة الأزمات والكوارث."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>}
                />
            </div>
        </Card>
    );
};

export default Unified911;