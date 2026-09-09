import { describe, it, expect } from "vitest";
import { CARDS, TOPICS, SENTENCES, SCENES, cardById, cardsByTopic, topicById } from "../words";

describe("Словарь", () => {
  it("должен содержать все карточки с уникальными ID", () => {
    const ids = CARDS.map((c) => c.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  it("каждая карточка должна ссылаться на существующую тему", () => {
    const topicIds = new Set(TOPICS.map((t) => t.id));
    for (const card of CARDS) {
      expect(topicIds.has(card.topicId)).toBe(true);
    }
  });

  it("cardById должен возвращать карточку по ID", () => {
    const firstCard = CARDS[0];
    const found = cardById(firstCard.id);
    expect(found).toBeDefined();
    expect(found?.id).toBe(firstCard.id);
  });

  it("cardsByTopic должен возвращать карточки только указанной темы", () => {
    const topicId = TOPICS[0].id;
    const cards = cardsByTopic(topicId);
    for (const card of cards) {
      expect(card.topicId).toBe(topicId);
    }
  });

  it("topicById должен возвращать тему по ID", () => {
    const firstTopic = TOPICS[0];
    const found = topicById(firstTopic.id);
    expect(found).toBeDefined();
    expect(found?.id).toBe(firstTopic.id);
  });

  it("все карточки имеют обязательные поля", () => {
    for (const card of CARDS) {
      expect(card.id).toBeTruthy();
      expect(card.topicId).toBeTruthy();
      expect(card.che).toBeTruthy();
      expect(card.ru).toBeTruthy();
      expect(card.emoji).toBeTruthy();
      expect(card.level).toBeGreaterThanOrEqual(1);
      expect(card.level).toBeLessThanOrEqual(3);
      expect(["corpus", "dictionary"]).toContain(card.source);
    }
  });

  it("чеченские слова достаточно длинные (нет обрезанных данных)", () => {
    for (const card of CARDS) {
      expect(card.che.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("чеченское слово не совпадает с русским переводом для исконных слов", () => {
    // Слова-заимствования могут совпадать (кино, музей...), но не все подряд.
    const same = CARDS.filter((c) => c.che.toLowerCase() === c.ru.toLowerCase());
    expect(same.length / CARDS.length).toBeLessThan(0.4);
  });

  it("внутри одной темы нет дубликатов «слово+перевод» (ломают игры)", () => {
    for (const topic of TOPICS) {
      const seen = new Map<string, number>();
      for (const card of cardsByTopic(topic.id)) {
        const key = `${card.che}|${card.ru}`;
        seen.set(key, (seen.get(key) ?? 0) + 1);
      }
      const dups = [...seen.entries()].filter(([, n]) => n > 1);
      expect(dups).toEqual([]);
    }
  });

  it("кросс-тематических дубликатов слов не становится больше (сейчас 65)", () => {
    const seen = new Map<string, number>();
    for (const card of CARDS) {
      const key = `${card.che}|${card.ru}`;
      seen.set(key, (seen.get(key) ?? 0) + 1);
    }
    const dups = [...seen.values()].filter((n) => n > 1).length;
    // Заимствования в нескольких темах допустимы, но их не должно разрастаться.
    expect(dups).toBeLessThanOrEqual(70);
  });

  it("у карточек нет числовых заглушек вместо слов (п1, к1 и т.п.)", () => {
    for (const card of CARDS) {
      expect(card.che).not.toMatch(/^[а-яА-ЯӀ]{1,2}\d+$/);
      expect(card.che).not.toMatch(/^[кцгптх1]{1,2}$/);
    }
  });

  it("сцены ссылаются на существующие карточки", () => {
    const ids = new Set(CARDS.map((c) => c.id));
    for (const scene of SCENES) {
      for (const obj of scene.objects) {
        expect(ids.has(obj.cardId)).toBe(true);
      }
    }
  });

  it("предложения непустые и состоят из слов", () => {
    for (const s of SENTENCES) {
      expect(s.words.length).toBeGreaterThanOrEqual(2);
      expect(s.ru).toBeTruthy();
    }
  });
});