import React from 'react';
// FIX: Changed import to use namespace to resolve module resolution issue with react-router-dom.
import * as ReactRouterDOM from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Fix: Replaced JSX.Element with React.ReactNode to resolve namespace error.
const ServiceCard: React.FC<{ title: string; to: string; icon: React.ReactNode }> = ({ title, to, icon }) => (
  <Card className="text-center p-6">
    <div className="flex justify-center items-center mb-4 text-heritage-gold">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-palm-green mb-4">{title}</h3>
    <ReactRouterDOM.Link to={to}>
      <Button variant="ghost">{useLanguage().t('moreDetails')}</Button>
    </ReactRouterDOM.Link>
  </Card>
);

const NewsCard: React.FC<{ title: string; excerpt: string; category: string; onClick: () => void; }> = ({ title, excerpt, category, onClick }) => (
    <Card onClick={onClick} className="cursor-pointer group h-full">
        <div className="p-6 flex flex-col h-full">
            <div>
                <span className="text-xs font-semibold uppercase text-heritage-gold">{category}</span>
                <h3 className="text-lg font-bold text-palm-green mt-1 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
                <span className="font-semibold text-palm-green group-hover:text-heritage-gold transition">
                    {useLanguage().t('moreDetails')} &rarr;
                </span>
            </div>
        </div>
    </Card>
);

const QuickLink: React.FC<{ title: string; to: string; icon: React.ReactNode; description: string }> = ({ title, to, icon, description }) => (
    <ReactRouterDOM.Link to={to} className="group block rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:-translate-y-1 bg-pure-white shadow-sm hover:shadow-lg border border-transparent hover:border-heritage-gold/50">
        <div className="flex justify-center items-center mx-auto mb-3 w-16 h-16 rounded-full bg-palm-green/10 text-palm-green transition-colors duration-300 group-hover:bg-heritage-gold group-hover:text-pure-white">
            {icon}
        </div>
        <h3 className="font-bold text-palm-green text-md transition-colors duration-300 group-hover:text-heritage-gold">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
    </ReactRouterDOM.Link>
);


const Home = () => {
  const { t } = useLanguage();
  const navigate = ReactRouterDOM.useNavigate();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-pure-white rounded-lg shadow-lg p-8 md:p-12 text-center" style={{backgroundImage: "url('https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="bg-black/60 p-8 rounded-md">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white">{t('welcomeTitle')}</h1>
            <p className="text-xl text-[#A18041] mt-8">{t('welcomeSubtitle')}</p>
            <p className="mt-4 text-lg text-light-gray max-w-3xl mx-auto">{t('welcomeDescription')}</p>
        </div>
      </section>

      {/* Quick Access Section */}
      <section>
        <SectionTitle>{t('quickAccess')}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <QuickLink
                title={t('residentRegistration')}
                description={t('residentRegistrationDesc')}
                to="/resident-registration"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            />
            <QuickLink
                title={t('officialForms')}
                description={t('officialFormsDesc')}
                to="/official-forms"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
            />
            <QuickLink
                title={t('realEstateRegistration')}
                description={t('realEstateRegistrationDesc')}
                to="/real-estate-registration"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            />
            <QuickLink
                title={t('contactUs')}
                description={t('contactUsDesc')}
                to="/contact"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            />
        </div>
      </section>

      {/* Services Section */}
      <section>
        <SectionTitle>{t('ourServices')}</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title={t('residentRegistration')} to="/resident-registration" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} />
            <ServiceCard title={t('realEstateRegistration')} to="/real-estate-registration" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} />
            <ServiceCard title={t('officialForms')} to="/official-forms" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} />
        </div>
      </section>

      {/* News Section */}
      <section>
        <SectionTitle>{t('latestNews')}</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard onClick={() => navigate('/news')} category="أخبار المملكة" title="مشروع نيوم يعلن عن شراكات جديدة" excerpt="تم توقيع اتفاقيات لتطوير البنية التحتية للطاقة المتجددة في المدينة المستقبلية." />
            <NewsCard onClick={() => navigate('/news')} category="أخبار أمنية" title="الدوريات الأمنية تكثف وجودها" excerpt="تعزيزات أمنية جديدة لضمان سلامة سكان الأحياء خلال فترة الإجازة." />
            <NewsCard onClick={() => navigate('/news')} category="أخبار العمدة والحي" title="انطلاق حملة تشجير الحي" excerpt="بدأت حملة زراعة 1000 شجرة جديدة في حي الإسكان والروضة بمشاركة الأهالي." />
        </div>
      </section>
    </div>
  );
};

export default Home;