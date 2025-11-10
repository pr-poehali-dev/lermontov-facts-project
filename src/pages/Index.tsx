import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Fact {
  id: string;
  title: string;
  category: string;
  preview: string;
  details: string;
  year?: string;
  icon: string;
}

const facts: Fact[] = [
  {
    id: '1',
    title: 'Поэт-вундеркинд',
    category: 'Детство',
    preview: 'Лермонтов начал писать стихи в 14 лет',
    details: 'Михаил Юрьевич начал сочинять стихи уже в четырнадцатилетнем возрасте. Его ранние произведения показывали необычайный талант и глубину мысли для столь юного возраста.',
    year: '1828',
    icon: 'BookOpen'
  },
  {
    id: '2',
    title: 'Наследник Пушкина',
    category: 'Творчество',
    preview: 'Стихотворение "Смерть поэта" сделало его знаменитым',
    details: 'После гибели Пушкина в 1837 году Лермонтов написал стихотворение "Смерть поэта", которое мгновенно разошлось по всей России в списках. Это произведение принесло ему всероссийскую известность.',
    year: '1837',
    icon: 'Feather'
  },
  {
    id: '3',
    title: 'Талантливый художник',
    category: 'Искусство',
    preview: 'Лермонтов был одарённым живописцем',
    details: 'Помимо литературы, Лермонтов увлекался живописью. Он создал более десятка картин с пейзажами Кавказа, а также портреты современников. Его акварели отличались тонкостью исполнения.',
    icon: 'Palette'
  },
  {
    id: '4',
    title: 'Мастер маскарада',
    category: 'Личность',
    preview: 'Любил переодеваться и мистифицировать общество',
    details: 'Лермонтов обладал актёрским талантом и любил появляться на балах в необычных костюмах. Однажды он явился на бал-маскарад в костюме астролога и предсказывал судьбы гостям.',
    icon: 'Drama'
  },
  {
    id: '5',
    title: 'Герой своего времени',
    category: 'Творчество',
    preview: 'Первый психологический роман в русской литературе',
    details: 'Роман "Герой нашего времени" (1840) стал первым в русской литературе психологическим романом. Лермонтов мастерски раскрыл внутренний мир Печорина, показав противоречия личности.',
    year: '1840',
    icon: 'Book'
  },
  {
    id: '6',
    title: 'Храбрый офицер',
    category: 'Военная служба',
    preview: 'Участвовал в боевых действиях на Кавказе',
    details: 'За храбрость в боях на Кавказе Лермонтов был представлен к наградам. Он проявлял исключительную смелость в сражениях и пользовался уважением среди военных.',
    icon: 'Shield'
  },
  {
    id: '7',
    title: 'Роковая дуэль',
    category: 'Судьба',
    preview: 'Погиб на дуэли в 26 лет',
    details: '15 июля 1841 года Лермонтов был убит на дуэли у подножия горы Машук в Пятигорске. Ему было всего 26 лет. За свою короткую жизнь он создал шедевры, которые стали классикой русской литературы.',
    year: '1841',
    icon: 'Flame'
  },
  {
    id: '8',
    title: 'Знаток Кавказа',
    category: 'География',
    preview: 'Кавказ стал главной темой его творчества',
    details: 'Кавказская природа и культура произвели на Лермонтова огромное впечатление. Многие его произведения, включая поэмы "Мцыри" и "Демон", посвящены этому краю.',
    icon: 'Mountain'
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  
  const categories = ['Все', ...Array.from(new Set(facts.map(f => f.category)))];
  
  const filteredFacts = selectedCategory === 'Все' 
    ? facts 
    : facts.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Михаил Лермонтов
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
            Интересные факты о великом русском поэте
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm opacity-75">
            <Icon name="Calendar" size={16} />
            <span>1814 — 1841</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Filter" size={24} />
            Категории
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="cursor-pointer hover:scale-105 transition-transform px-4 py-2 text-sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFacts.map((fact, index) => (
            <Card 
              key={fact.id} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={fact.icon} size={24} className="text-accent" />
                      <Badge variant="secondary" className="text-xs">
                        {fact.category}
                      </Badge>
                      {fact.year && (
                        <Badge variant="outline" className="text-xs">
                          {fact.year}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">{fact.title}</CardTitle>
                    <CardDescription className="text-base">
                      {fact.preview}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="details" className="border-none">
                    <AccordionTrigger className="text-sm hover:no-underline py-2">
                      <span className="flex items-center gap-2 text-accent">
                        <Icon name="ChevronDown" size={16} />
                        Подробнее
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground pt-2">
                      {fact.details}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="BookMarked" size={20} />
            <p className="text-sm">
              Образовательный проект о М.Ю. Лермонтове
            </p>
          </div>
          <p className="text-xs">
            © 2025 • Создано с любовью к русской литературе
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
