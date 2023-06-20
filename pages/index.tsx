import Head from "next/head";
import {
  GradientBackgroundCon,
  FooterCon,
  FooterLink,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText
} from "@/components/QuoteGenerator/QuoteGeneratorElements";
import { useState } from "react";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Inspirational Quotes</title>
        <meta name="description" content="Some quotes for your life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>
        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Inspiration Unveiled: Unleashing Wisdom One Quote at a Time
              <br />
              Quotes provided by{" "}
              <FooterLink
                href={"https://zenquotes.io/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                ZenQuotes API
              </FooterLink>
            </QuoteGeneratorSubTitle>
            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={() => { null }}>
                Random Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Footer */}
        <FooterCon>
          <>
            Quotes generated: {numberOfQuotes}
            <br />
            Developed by{" "}
            <FooterLink
              href="https://www.linkedin.com/in/jmibarlucea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @jmibarlucea
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  );
}
