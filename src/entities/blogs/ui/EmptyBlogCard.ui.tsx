import { useLanguageStore } from "@/shared/state/useLanguageStore";



export const EmptyBlogCard: React.FC = () => {
    const { language } = useLanguageStore();

    return (
        <section className="">
            <div className="text-center py-12">
                <p className="text-muted-foreground">
                    {language === 'fr' ? 'Aucun article trouvé.' : 'No articles found.'}
                </p>
            </div>
        </section>
    )
}