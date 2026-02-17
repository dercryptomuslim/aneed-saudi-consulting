# Upstash Redis Setup für Blog-View-Counter

## Schritt 1: Upstash Redis Integration hinzufügen

1. Gehe zu deinem Vercel Dashboard: https://vercel.com/dashboard
2. Wähle dein Projekt aus
3. Gehe zu **Settings** → **Integrations**
4. Suche nach **Upstash Redis** oder gehe zu **Storage** → **Browse Marketplace**
5. Wähle **Upstash Redis** und klicke auf **Add Integration**
6. Erstelle eine neue Redis-Datenbank (Free Tier ist ausreichend)

## Schritt 2: Environment Variables

Nach der Integration werden automatisch folgende Environment Variables erstellt:
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Diese werden automatisch von Vercel gesetzt, du musst nichts manuell tun.

## Schritt 3: Deployment

Nach dem nächsten Deployment wird Upstash Redis automatisch verwendet für:
- ✅ Persistente View-Counts (überleben Deployments)
- ✅ 24-Stunden IP-Block
- ✅ Automatische Initialisierung mit Startwerten

## Lokale Entwicklung

Für lokale Entwicklung wird weiterhin die Datei-basierte Lösung verwendet (`data/blog-views.json`).

## Vorteile

- ✅ **Persistent**: View-Counts bleiben auch nach Deployments erhalten
- ✅ **Schnell**: Redis-basiert, sehr schnell
- ✅ **Automatisch**: Keine manuelle Konfiguration nötig
- ✅ **Kostenlos**: Upstash Redis Free Tier (10.000 Requests/Tag) ist ausreichend für diese Anwendung
