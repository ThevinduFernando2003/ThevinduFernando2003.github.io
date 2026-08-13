const http = require("http");
const fs = require("fs");

http
  .get("http://localhost:3000", (res) => {
    let d = "";
    res.on("data", (c) => (d += c));
    res.on("end", () => {
      console.log("HTTP", res.statusCode);
      console.log("BYTES", d.length);

      const text = d
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      console.log("\n--- VISIBLE TEXT (first 2200 chars) ---\n");
      console.log(text.slice(0, 2200));

      const sectionIds = ["hero", "about", "journey", "projects", "achievements", "contact"];
      const found = sectionIds.filter((id) => d.includes(`id="${id}"`) || d.includes(`id='${id}'`));
      console.log("\n--- SECTIONS ---\n", found.join(", "));

      const headings = [...d.matchAll(/<(h1|h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi)].map((m) =>
        m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
      );
      console.log("\n--- HEADINGS ---\n");
      headings.slice(0, 30).forEach((h) => console.log(" -", h));

      // rough checks for design tokens in CSS / class names
      const checks = {
        darkBg: /bg-bg|#050505|background/.test(d),
        accent: /accent|#00e5ff/.test(d),
        framer: /framer|motion|opacity/.test(d),
        name: /Thevindu/.test(d),
        table: /Achievement|View Media|Full Achievement/.test(d),
        gallery: /Event Highlights/.test(d),
        projects: /AgriSenseNet|Pintos|From GitHub/.test(d),
      };
      console.log("\n--- CHECKS ---\n", checks);

      fs.writeFileSync("tmp-home.html", d);
      console.log("\nSaved tmp-home.html");
    });
  })
  .on("error", (e) => {
    console.error("FETCH FAILED:", e.message);
    process.exit(1);
  });
