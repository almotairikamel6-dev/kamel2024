
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const SystemArticle: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold text-palm-green mb-2">{title}</h3>
        <div className="prose max-w-none text-gray-700 rtl:prose-headings:font-cairo ltr:prose-headings:font-lato">
            {children}
        </div>
    </div>
);

const OmdaSystem = () => {
  const { t } = useLanguage();
  return (
    <Card className="p-6 md:p-10">
      <SectionTitle>{t('omdaSystem')}</SectionTitle>
      <p className="mb-8 text-gray-600">المواد النظامية من المرسوم الملكي رقم م/٧ لعام ١٤٠٦هـ.</p>
      
      <SystemArticle title="المادة الأولى: تعريف العمدة ونوابه">
          <p>العمدة هو ممثل السلطة في حيه ومسؤول عن حفظ الأمن ومساعدة السلطات العامة في أداء مهامها. ويجوز أن يكون للعمدة نائب أو أكثر لمساعدته في مهامه.</p>
      </SystemArticle>
      
      <SystemArticle title="المادة الثانية: شروط التعيين">
          <ul>
              <li>أن يكون سعودي الجنسية.</li>
              <li>أن لا يقل عمره عن ثلاثين عاماً.</li>
              <li>أن يكون من سكان الحي أو من المعروفين لدى أهله.</li>
              <li>أن يكون حسن السيرة والسلوك.</li>
          </ul>
      </SystemArticle>

      <SystemArticle title="المادة الثالثة: المسؤوليات والاختصاصات">
          <p>يختص العمدة بمراقبة الحالة الأمنية في الحي، والإبلاغ عن المشتبه بهم، ومساعدة الشرطة في تنفيذ مهامها، والمساهمة في حل الخلافات البسيطة بين السكان.</p>
      </SystemArticle>
      
       <SystemArticle title="المادة الرابعة: المحظورات">
          <p>يُحظر على العمدة استغلال منصبه لتحقيق مصالح شخصية، أو التوسط في قضايا منظورة أمام القضاء، أو إفشاء أسرار العمل.</p>
      </SystemArticle>
    </Card>
  );
};

export default OmdaSystem;
