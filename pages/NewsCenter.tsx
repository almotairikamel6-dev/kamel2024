import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const NewsCard: React.FC<{ title: string; excerpt: string; date: string; image: string; }> = ({ title, excerpt, date, image }) => (
    <Card className="flex flex-col h-full">
        {/* Image removed as requested */}
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-palm-green mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{excerpt}</p>
            <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
                <span>{date}</span>
                <a href="#" className="font-semibold text-palm-green hover:text-heritage-gold transition">
                    {useLanguage().t('moreDetails')} &rarr;
                </a>
            </div>
        </div>
    </Card>
);

const NewsCenter = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('all');

    const newsItems = [
        { category: 'kingdom', title: "مشاريع جديدة في رؤية 2030", excerpt: "الإعلان عن حزمة من المشاريع التنموية الكبرى.", date: "15 يوليو 2024", image: "https://images.pexels.com/photos/15599093/pexels-photo-15599093/free-photo-of-king-abdullah-financial-district.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { category: 'qassim', title: "افتتاح مهرجان تمور بريدة", excerpt: "يشهد المهرجان إقبالاً كبيراً من الزوار والمستثمرين.", date: "14 يوليو 2024", image: "https://images.pexels.com/photos/7993333/pexels-photo-7993333.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { category: 'security', title: "شرطة القصيم تقبض على مطلوبين", excerpt: "جهود أمنية متواصلة لتعزيز الأمن في المنطقة.", date: "13 يوليو 2024", image: "https://images.pexels.com/photos/236605/pexels-photo-236605.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { category: 'neighborhood', title: "اجتماع العمدة مع أهالي الحي", excerpt: "مناقشة احتياجات الحي وسبل تطوير الخدمات.", date: "12 يوليو 2024", image: "https://images.pexels.com/photos/7848733/pexels-photo-7848733.jpeg?auto=compress&cs=tinysrgb&w=400" },
    ];
    
    const filteredNews = activeTab === 'all' ? newsItems : newsItems.filter(item => item.category === activeTab);

    const TabButton: React.FC<{ tabName: string; label: string }> = ({ tabName, label }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                activeTab === tabName ? 'bg-palm-green text-pure-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
        >
            {label}
        </button>
    );

    return (
        <>
            <SectionTitle>{t('newsCenter')}</SectionTitle>
            <div className="flex flex-wrap gap-2 mb-8">
                <TabButton tabName="all" label="الكل" />
                <TabButton tabName="kingdom" label="أخبار المملكة" />
                <TabButton tabName="qassim" label="أخبار منطقة القصيم" />
                <TabButton tabName="security" label="أخبار أمنية" />
                <TabButton tabName="neighborhood" label="أخبار العمدة والحي" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((news, index) => <NewsCard key={index} {...news} />)}
            </div>
        </>
    );
};

export default NewsCenter;