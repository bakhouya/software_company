import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Minus, Headphones, ShoppingBag, Truck, RotateCcw, CircleHelp, Sparkles, CheckCheck, ChevronRight} from "lucide-react";


type ChatMessage = {
  id: number;
  text: string;
  sender: "bot" | "user";
  time: string;
};
type QuickAction = {
  id: string;
  label: string;
  icon: typeof ShoppingBag;
  question: string;
};


const quickActions: QuickAction[] = [
  {
    id: "order",
    label: "Comment commander un produit ?",
    icon: ShoppingBag,
    question: "Comment commander un produit ?",
  },
  {
    id: "tracking",
    label: "Suivre ma commande",
    icon: Truck,
    question: "Où en est ma commande ?",
  },
  {
    id: "return",
    label: "Retours et échanges",
    icon: RotateCcw,
    question: "Quelle est votre politique de retour ?",
  },
  {
    id: "support",
    label: "Autre demande",
    icon: CircleHelp,
    question: "J’ai besoin d’une autre assistance.",
  },
];



const getCurrentTime = () => new Intl.DateTimeFormat("fr-FR", {hour: "2-digit", minute: "2-digit"}).format(new Date());

const createMessage = (text: string, sender: ChatMessage["sender"]): ChatMessage => ({
    id: Date.now() + Math.random(),
    text,
    sender,
    time: getCurrentTime(),
});

const getBotResponse = (message: string): string => {
  const text = message.toLowerCase();

  if (
    text.includes("كيفاش نطلب") ||
    text.includes("طلب منتج") ||
    text.includes("commander") ||
    text.includes("commande")
  ) {
    return "باش تطلب منتج، دخل لصفحة المنتج واختار الخيارات المتاحة، من بعد زيدو للسلة وكمل معلومات الطلب ديالك. إلا كانت عندك شي مشكلة، نقدر نوجّهك للخطوة المناسبة.";
  }

  if (
    text.includes("تتبع") ||
    text.includes("فين وصل") ||
    text.includes("الطلب ديالي") ||
    text.includes("suivi") ||
    text.includes("tracking")
  ) {
    return "باش تعرف فين وصل الطلب ديالك، دخل لصفحة تتبع الطلبات واستعمل رقم الطلب ديالك. إلا ما عندكش رقم الطلب، راجع تأكيد الطلب اللي توصّلتي به.";
  }

  if (
    text.includes("إرجاع") ||
    text.includes("استبدال") ||
    text.includes("remboursement") ||
    text.includes("retour")
  ) {
    return "سياسة الإرجاع والاستبدال كتختلف حسب شروط المتجر والمنتج. تقدر تشوف صفحة سياسة الإرجاع باش تعرف المدة والشروط المطلوبة قبل تقديم الطلب.";
  }

  if (
    text.includes("توصيل") ||
    text.includes("شحال") ||
    text.includes("livraison") ||
    text.includes("delivery")
  ) {
    return "معلومات التوصيل والثمن والمدة كتقدر تختلف حسب المدينة والطلب. راجع تفاصيل التوصيل أثناء إتمام الطلب باش تشوف المعلومات المتاحة ليك.";
  }

  if (
    text.includes("ثمن") ||
    text.includes("السعر") ||
    text.includes("prix") ||
    text.includes("price")
  ) {
    return "تقدر تشوف ثمن كل منتج مباشرة فصفحة التفاصيل ديالو. إلا كان عندك منتج معين، صيفط ليا الاسم ديالو ونوجّهك.";
  }

  if (
    text.includes("مساعدة أخرى") ||
    text.includes("موظف") ||
    text.includes("شخص") ||
    text.includes("بغيت نهضر") ||
    text.includes("support") ||
    text.includes("human")
  ) {
    return "مرحبا! هاد المساعد كيعطي أجوبة تلقائية على الأسئلة الشائعة. فهاد النسخة، التواصل المباشر مع موظف مازال ما مربوطش. تقدر تختار سؤال من اللائحة أو تكتب ليا شنو بغيتي تعرف.";
  }

  if (
    text.includes("سلام") ||
    text.includes("مرحبا") ||
    text.includes("السلام") ||
    text.includes("bonjour") ||
    text.includes("hello")
  ) {
    return "وعليكم السلام ومرحبا بيك! 😊 أنا هنا باش نعاونك فأسئلة الطلبات، التوصيل، والإرجاع. اختار واحد من الأسئلة الجاهزة أو كتب سؤالك.";
  }

  return "شكراً على رسالتك! 😊 ما عنديش جواب محدد على هاد السؤال دابا. جرّب تختار واحد من الأسئلة الجاهزة، أو وضّح ليا أكثر شنو بغيتي تعرف.";
};

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      text: "مرحبا بيك! 👋 أنا المساعد ديال المتجر. كيفاش نقدر نعاونك اليوم؟",
      time: getCurrentTime(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);


  const sendMessage = (value: string) => {
    const text = value.trim();

    if (!text || isTyping) return;

    const userMessage = createMessage(text, "user");

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setIsTyping(true);

    typingTimeoutRef.current = setTimeout(
      () => {
        const answer = getBotResponse(text);

        setMessages((previous) => [
          ...previous,
          createMessage(answer, "bot"),
        ]);

        setIsTyping(false);
        typingTimeoutRef.current = null;
      },
      700 + Math.random() * 500,
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const openChat = () => {
    setIsOpen(true);

    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 250);
  };

  const resetChat = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }

    setIsTyping(false);
    setInput("");

    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "مرحبا بيك من جديد! 👋 كيفاش نقدر نعاونك؟",
        time: getCurrentTime(),
      },
    ]);
  };

  return (
    <div className="live-chat">
      {/* Floating chat button */}
      {!isOpen && (
        <button type="button" className="launcher" onClick={openChat} aria-label="فتح المحادثة" aria-expanded={false}>
          <MessageCircle  size={27} strokeWidth={1.8}/>
          {/* <span className="launcher_badge">1</span> */}
          <span className="launcher_tooltip">You need some help</span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <section className="live_window" role="dialog" aria-label="" aria-modal="false">



          <header className="live_chat_header">

            <div className="flex align_center gap_12">
              <div className="avatar avatar_lg radius_large bg_opacity">
                <Headphones size={23} strokeWidth={1.8} className="text_white"/>
              </div>

              <div className="">
                <div className="text_body text_white fw_semibold"> Assistance & Support </div>
                <div className="flex align_center justify_start gap_7">
                    <div className="status_dot my_start_7"></div>
                    <div className="fs_xs text_success"> En ligne </div>  
                </div>
              </div>
            </div>

            <div className="flex align_center gap_12">
              <button type="button" className="btn btn_icon btn_md radius_large bg_opacity" onClick={resetChat} aria-label="بدء محادثة جديدة" title="محادثة جديدة">
                <Sparkles size={18} />
              </button>

              <button type="button" className="btn btn_icon btn_md radius_large bg_opacity" onClick={() => setIsOpen(false)} aria-label="إغلاق المحادثة" title="إغلاق">
                <Minus size={20} />
              </button>
            </div>
          </header>


          <div className="live_chat_body" aria-live="polite" aria-relevant="additions">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="svg_home">
          <path d="M359.3 200 C361.8 237.6 327.8 305.7 297.4 322.2 C267.1 338.7 211.4 310.7 177.4 298.8 C143.5 287 109.2 277 93.6 251.2 C78.1 225.4 71.3 174.7 84 144.2 C96.7 113.6 136.8 75.6 169.8 67.7 C202.9 59.8 250.7 74.7 282.3 96.8 C313.9 118.8 356.8 162.4 359.3 200 Z" fill=""/>
        </svg>
            <div className="py_2 px_10 radius_large bg_hover mx_auto max_centent my_end_12">
              <span className="fs_xs"> Démarrer la conversation </span>
            </div>

            {/* {messages.map((message) => (
              <div
                key={message.id}
                className={`live-chat__message live-chat__message--${message.sender}`}
              >
                {message.sender === "bot" && (
                  <div className="live-chat__message-avatar">
                    <Headphones size={15} />
                  </div>
                )}

                <div className="live-chat__message-content">
                  <div className="live-chat__bubble">
                    {message.text}
                  </div>

                  <div className="live-chat__message-meta">
                    <time>{message.time}</time>

                    {message.sender === "user" && (
                      <CheckCheck
                        size={14}
                        className="live-chat__read-icon"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))} */}


            {isTyping && (
              <div className="live-chat__message live-chat__message--bot">
                <div className="live-chat__message-avatar">
                  <Headphones size={15} />
                </div>

                <div className="live-chat__typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}


            {messages.length === 1 && !isTyping && (
              <div className="quick_replies">
                <div className="text_body fs_sm text_muted text_center my_end_10"> Choisissez votre besoin </div>

                <div className="quick_list">
                  {quickActions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <button
                        key={action.id}
                        type="button"
                        className="quick_button"
                        onClick={() => sendMessage(action.question)}
                        disabled={isTyping}>
                        <div className="flex align_center gap_12">
                            <span className="avatar avatar_sm radius_large bg_hover border_hover">
                                <Icon size={17} strokeWidth={1.8} />
                            </span>

                            <span>{action.label}</span>
                        </div>
                        <span className="my_start_5">
                          <ChevronRight  size={16}/>
                        </span>
                      </button>
                    );

                  })}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>




          <footer className="live_chat_footer">
            <form className="form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Posez-nous votre question"
                aria-label="Message"
                autoComplete="off"
                maxLength={1000}
                disabled={isTyping}
              />

              <button
                type="submit"
                className="btn btn_icon btn_md btn_primary radius_large btn_glow"
                disabled={!input.trim() || isTyping}
                aria-label="Send Message">
                <Send size={18} />
              </button>
            </form>

            <div className="footer_bottom">
              <span>
                <span className="footer_status" />Nous sommes là pour vous !
              </span>

              <span className="powered">
                <Sparkles size={12} />
                Assistance intelligente
              </span>
            </div>
          </footer>


        </section>
      )}
    </div>
  );
}