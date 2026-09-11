# 🧰 File & Media Utilities

The nuts-and-bolts toolbox for inspecting, fixing, transforming, organizing, and recovering a large media collection.

> **Goal:** Know what a file is, know whether it is healthy, make it usable, and keep it organized without destroying the original.

## File Identification

- File type identification
- MIME / container inspection
- Codec identification
- Magic-number / signature tools
- Unknown-file analysis

## Hashing & Integrity

- SHA / checksum utilities
- Folder verification
- Duplicate hash comparison
- Integrity manifests
- Bit-rot / corruption checking

## Bulk Rename & Organization

- Batch renamers
- Pattern / regex renaming
- Folder restructuring
- Date-based organization
- Filename sanitizing
- Sequence numbering

## Media Inspection

- Video / audio stream inspection
- Resolution, bitrate, codec, FPS and duration
- Image dimensions / format inspection
- Embedded subtitle and chapter inspection
- Container analysis

## Metadata

- EXIF viewers / editors
- Media metadata viewers / editors
- Metadata stripping
- Metadata preservation
- Sidecar files
- Timestamp repair

## Conversion & Remuxing

- Video conversion
- Audio conversion
- Image conversion
- Remuxing without re-encoding
- Codec conversion
- Batch conversion

## Compression & Optimization

- Lossless compression
- Image optimization
- Video compression
- Archive compression
- Storage-space optimization

## Split, Join & Extract

- Video joining / splitting
- Archive splitting / joining
- Frame extraction
- Audio extraction
- Subtitle extraction
- Thumbnail / contact-sheet generation

## Repair & Recovery

- Corrupt video repair
- Broken container repair
- Image recovery
- Archive repair
- Deleted-file recovery
- Partial-download recovery

## Similarity & Deduplication

- Exact duplicate detection
- Perceptual image hashing
- Similar-image detection
- Similar-video detection
- Near-duplicate detection
- Duplicate review workflows

## Preview & Thumbnailing

- Thumbnail generators
- Video contact sheets
- Quick-look / preview tools
- Gallery generators
- Media browsers

## Automation & Batch Processing

- ffmpeg workflows
- Shell / Python scripts
- Folder watchers
- Batch processors
- Drag-and-drop utilities
- Scheduled maintenance

## Preservation Rules

1. Keep the original until the replacement is verified.
2. Prefer remuxing over re-encoding when possible.
3. Hash important files before large migrations.
4. Test recovery workflows before you need them.
5. Automate repetitive operations, but keep destructive actions reviewable.

### Entry format

```md
- 🐐 **[Tool](https://example.com)** — What it does and why it belongs here. `Free` `macOS` `Windows`
```
